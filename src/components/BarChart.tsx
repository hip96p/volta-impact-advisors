'use client';

import { motion } from 'framer-motion';

interface BarChartProps {
  data: { label: string; value: number }[];
  unit: string;
  color?: string;
  maxBars?: number;
}

export default function BarChart({ data, unit, color = '#09814A', maxBars = 10 }: BarChartProps) {
  const sliced = data.slice(0, maxBars);
  const maxVal = Math.max(...sliced.map((d) => d.value), 1);

  return (
    <div className="space-y-2.5">
      {sliced.map((item, i) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="text-[11px] text-charcoal/50 font-body w-28 text-right truncate flex-shrink-0">
            {item.label}
          </span>
          <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.value / maxVal) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
              className="h-full rounded-full flex items-center justify-end pr-2"
              style={{ backgroundColor: color }}
            >
              <span className="text-[10px] text-white font-medium font-body whitespace-nowrap">
                {item.value.toFixed(1)}{unit}
              </span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
