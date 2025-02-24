"use client"

import { motion, useAnimation } from "framer-motion"
import { Database, Table, GitBranch, Link as LinkIcon } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { CardHoverEffect } from "./card-hover-effect"

interface TableNode {
  id: string
  name: string
  columns: { 
    name: string
    type: string
    key?: boolean
    foreignKey?: boolean
    unique?: boolean
    nullable?: boolean
  }[]
}

interface TableRelation {
  from: string
  to: string
  type: "one-to-many" | "many-to-one" | "many-to-many"
  fromField?: string
  toField?: string
}

const tables: TableNode[] = [
  {
    id: "profiles",
    name: "profiles",
    columns: [
      { name: "id", type: "uuid", key: true },
      { name: "username", type: "text", unique: true },
      { name: "full_name", type: "text" },
      { name: "avatar_url", type: "text", nullable: true },
      { name: "bio", type: "text", nullable: true },
      { name: "location", type: "text", nullable: true },
      { name: "website", type: "text", nullable: true },
      { name: "email", type: "text", unique: true },
      { name: "phone", type: "text", nullable: true },
      { name: "cover_url", type: "text", nullable: true },
      { name: "role", type: "user_role" },
      { name: "is_verified", type: "bool" },
      { name: "created_at", type: "timestamptz" },
      { name: "updated_at", type: "timestamptz" }
    ]
  },
  {
    id: "posts",
    name: "posts",
    columns: [
      { name: "id", type: "uuid", key: true },
      { name: "user_id", type: "uuid", foreignKey: true },
      { name: "content", type: "text" },
      { name: "media_urls", type: "text[]", nullable: true },
      { name: "location", type: "text", nullable: true },
      { name: "is_published", type: "bool" },
      { name: "created_at", type: "timestamptz" },
      { name: "updated_at", type: "timestamptz" }
    ]
  },
  {
    id: "likes",
    name: "likes",
    columns: [
      { name: "id", type: "uuid", key: true },
      { name: "post_id", type: "uuid", foreignKey: true },
      { name: "user_id", type: "uuid", foreignKey: true },
      { name: "created_at", type: "timestamptz" }
    ]
  },
  {
    id: "tags",
    name: "tags",
    columns: [
      { name: "id", type: "uuid", key: true },
      { name: "name", type: "text", unique: true },
      { name: "created_at", type: "timestamptz" }
    ]
  },
  {
    id: "post_tags",
    name: "post_tags",
    columns: [
      { name: "post_id", type: "uuid", foreignKey: true, key: true },
      { name: "tag_id", type: "uuid", foreignKey: true, key: true },
      { name: "created_at", type: "timestamptz" }
    ]
  }
]

const relations: TableRelation[] = [
  { from: "posts", to: "profiles", fromField: "user_id", toField: "id", type: "many-to-one" },
  { from: "likes", to: "posts", fromField: "post_id", toField: "id", type: "many-to-one" },
  { from: "likes", to: "profiles", fromField: "user_id", toField: "id", type: "many-to-one" },
  { from: "post_tags", to: "posts", fromField: "post_id", toField: "id", type: "many-to-one" },
  { from: "post_tags", to: "tags", fromField: "tag_id", toField: "id", type: "many-to-one" }
]

export default function DatabaseVisualSection() {
  const [activeTable, setActiveTable] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [tableRefs, setTableRefs] = useState<{ [key: string]: DOMRect }>({})

  // Update table positions when mounted and on window resize
  useEffect(() => {
    const updateTablePositions = () => {
      const newTableRefs: { [key: string]: DOMRect } = {}
      tables.forEach(table => {
        const element = document.getElementById(`table-${table.id}`)
        if (element) {
          newTableRefs[table.id] = element.getBoundingClientRect()
        }
      })
      setTableRefs(newTableRefs)
    }

    updateTablePositions()
    window.addEventListener('resize', updateTablePositions)
    return () => window.removeEventListener('resize', updateTablePositions)
  }, [])

  const calculatePath = (from: string, to: string) => {
    const fromRect = tableRefs[from]
    const toRect = tableRefs[to]
    
    if (!fromRect || !toRect) return ''

    // Calculate the center points
    const fromX = fromRect.left + fromRect.width / 2
    const fromY = fromRect.top + fromRect.height / 2
    const toX = toRect.left + toRect.width / 2
    const toY = toRect.top + toRect.height / 2

    // Create a curved path
    return `M ${fromX} ${fromY} C ${fromX} ${(fromY + toY) / 2}, ${toX} ${(fromY + toY) / 2}, ${toX} ${toY}`
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced grid background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 230, 153, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 230, 153, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20 mb-4">
            Database Schema
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Relational Database
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Design complex data relationships with ease. Our serverless PostgreSQL solution 
            supports advanced relational database features out of the box.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Database visualization */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {tables.map((table, index) => (
              <motion.div
                key={table.id}
                id={`table-${table.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardHoverEffect className="relative">
                  <div 
                    className={`p-6 rounded-xl border ${
                      activeTable === table.id 
                        ? 'border-[#00E699] bg-[#00E699]/5' 
                        : 'border-[#00E699]/10 bg-black/50'
                    } backdrop-blur-sm`}
                    onMouseEnter={() => setActiveTable(table.id)}
                    onMouseLeave={() => setActiveTable(null)}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Table className="h-5 w-5 text-[#00E699]" />
                      <h3 className="text-lg font-semibold text-white">
                        {table.name}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {table.columns.map((column) => (
                        <div 
                          key={column.name}
                          className="flex items-center justify-between text-sm"
                        >
                          <div className="flex items-center gap-2">
                            {column.key && (
                              <div className="text-[#00E699] text-xs">🔑</div>
                            )}
                            {column.foreignKey && (
                              <div className="text-blue-400 text-xs">🔗</div>
                            )}
                            {column.unique && (
                              <div className="text-purple-400 text-xs">★</div>
                            )}
                            <span className="text-neutral-300">
                              {column.name}
                            </span>
                          </div>
                          <span className="text-neutral-500">
                            {column.nullable ? '?' : ''} {column.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHoverEffect>
              </motion.div>
            ))}
          </div>

          {/* Enhanced relation lines */}
          <svg 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              width: '100%',
              height: '100%',
              top: '0',
              left: '0',
              zIndex: -1 
            }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {relations.map((relation, index) => (
              <g key={`${relation.from}-${relation.to}`}>
                {/* Glowing background line */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1.5 }}
                  d={calculatePath(relation.from, relation.to)}
                  stroke="#00E699"
                  strokeWidth="4"
                  fill="none"
                  filter="url(#glow)"
                />
                {/* Main line */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  d={calculatePath(relation.from, relation.to)}
                  stroke="#00E699"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
} 