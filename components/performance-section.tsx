"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PerformanceGrid from "./performance-grid"
import { TypeAnimation } from "./type-animation"
import { useState, useEffect } from "react"
import { Activity, Cpu, Database, Gauge } from "lucide-react"

export default function PerformanceSection() {
  const queries = [
    {
      comment: "// Complex join with aggregation",
      code: `SELECT 
  u.name,
  COUNT(o.id) as order_count,
  SUM(o.amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id
HAVING COUNT(o.id) > 5
LIMIT 1000;`,
      timing: "0.045s",
      rows: "1,234"
    },
    {
      comment: "// Real-time analytics query",
      code: `WITH daily_stats AS (
  SELECT 
    DATE_TRUNC('day', created_at) as day,
    COUNT(*) as events,
    COUNT(DISTINCT user_id) as users
  FROM events
  WHERE created_at > NOW() - INTERVAL '7 days'
  GROUP BY 1
)
SELECT * FROM daily_stats
ORDER BY day DESC;`,
      timing: "0.067s",
      rows: "7"
    },
    {
      comment: "// Geospatial query example",
      code: `SELECT 
  name,
  ST_Distance(
    location,
    ST_MakePoint(-73.935242, 40.730610)
  ) as distance
FROM venues
WHERE ST_DWithin(
  location,
  ST_MakePoint(-73.935242, 40.730610),
  5000
)
ORDER BY distance
LIMIT 10;`,
      timing: "0.032s",
      rows: "10"
    }
  ]

  const [currentQueryIndex, setCurrentQueryIndex] = useState(0)
  const currentQuery = queries[currentQueryIndex]

  // Add new metrics state
  const [metrics, setMetrics] = useState({
    qps: 0,
    latency: 0,
    connections: 0,
    cpu: 0
  })

  // Simulate real-time metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        qps: Math.floor(Math.random() * 1000) + 2000,
        latency: (Math.random() * 2 + 1).toFixed(2),
        connections: Math.floor(Math.random() * 100) + 400,
        cpu: Math.floor(Math.random() * 20) + 30
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleQueryComplete = () => {
    setTimeout(() => {
      setCurrentQueryIndex((prev) => (prev + 1) % queries.length)
    }, 2000)
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black via-[#00E699]/5 to-black">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <PerformanceGrid />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20">
              Performance
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white mt-4">
              Lightning Fast Queries
            </h2>
            <p className="text-neutral-400 md:text-xl/relaxed mt-4">
              Experience blazing fast query performance with our optimized PostgreSQL engine. Built for modern
              applications that demand speed and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button 
                size="lg"
                className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-6 text-lg rounded-lg"
              >
                View Benchmarks
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/20 text-black hover:bg-white/5 hover:text-white px-8 py-6 text-lg rounded-lg"
              >
                Read Documentation
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 max-w-6xl mx-auto">
          {/* Terminal Section */}
          <div className="relative aspect-[16/10]">
            {/* Background Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -right-4 -bottom-4 w-full h-full"
            >
              <div className="relative h-full rounded-xl border border-[#00E699]/5 bg-black/30 backdrop-blur-sm" />
            </motion.div>

            {/* Middle Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute -right-2 -bottom-2 w-full h-full"
            >
              <div className="relative h-full rounded-xl border border-[#00E699]/10 bg-black/40 backdrop-blur-sm" />
            </motion.div>

            {/* Main Terminal */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E699]/20 to-transparent opacity-20 blur-3xl" />
              
              {/* Terminal Header */}
              <div className="relative h-full rounded-xl border border-[#00E699]/10 bg-black/50 overflow-hidden backdrop-blur-sm">
                <div className="flex items-center gap-1.5 px-4 py-2 border-b border-[#00E699]/10 bg-[#00E699]/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-xs text-neutral-400">query.sql</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6">
                  <pre className="text-sm font-mono">
                    <code>
                      <span className="text-neutral-400">
                        <TypeAnimation 
                          text={currentQuery.comment} 
                          delay={0}
                        />
                      </span>
                      {'\n'}
                      <TypeAnimation 
                        text={currentQuery.code}
                        className="text-[#00E699]"
                        delay={1000}
                        speed={20}
                      />
                      {'\n\n'}
                      <span className="text-neutral-400">
                        <TypeAnimation text="// Query completed in " delay={4000} />
                      </span>
                      <span className="text-[#00E699]">
                        <TypeAnimation text={currentQuery.timing} delay={4500} />
                      </span>
                      {'\n'}
                      <span className="text-neutral-400">
                        <TypeAnimation text="// Rows returned: " delay={5000} />
                      </span>
                      <span className="text-[#00E699]">
                        <TypeAnimation text={currentQuery.rows} delay={5500} />
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Metrics Dashboard */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {/* QPS Metric */}
              <div className="rounded-xl border border-[#00E699]/10 bg-black/50 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-[#00E699]" />
                  <span className="text-sm text-neutral-400">Queries/sec</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {metrics.qps.toLocaleString()}
                </div>
              </div>

              {/* Latency Metric */}
              <div className="rounded-xl border border-[#00E699]/10 bg-black/50 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="h-4 w-4 text-[#00E699]" />
                  <span className="text-sm text-neutral-400">Avg Latency</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {metrics.latency}ms
                </div>
              </div>

              {/* Connections Metric */}
              <div className="rounded-xl border border-[#00E699]/10 bg-black/50 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="h-4 w-4 text-[#00E699]" />
                  <span className="text-sm text-neutral-400">Connections</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {metrics.connections}
                </div>
              </div>

              {/* CPU Usage Metric */}
              <div className="rounded-xl border border-[#00E699]/10 bg-black/50 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="h-4 w-4 text-[#00E699]" />
                  <span className="text-sm text-neutral-400">CPU Usage</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {metrics.cpu}%
                </div>
              </div>
            </motion.div>

            {/* Add a mini chart or additional metrics here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[#00E699]/10 bg-black/50 p-4 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-neutral-400">System Health</span>
                <span className="text-sm text-[#00E699]">Excellent</span>
              </div>
              <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#00E699] to-[#00E699]/50 transition-all duration-500"
                  style={{ width: `${metrics.cpu}%` }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 