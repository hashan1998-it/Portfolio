'use client'

import Section from '@/components/UI/Section'
import { motion } from 'framer-motion'
import { experience } from '@/data/experience'

const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      className="relative flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-3xl">
        <div className="glass rounded-lg p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {item.title}
          </h3>
          <h4 className="text-primary font-medium mb-2">{item.organization}</h4>
          <p className="text-foreground-muted mb-3">{item.period}</p>
          <p className="text-foreground-muted">{item.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-4 h-4 bg-primary rounded-full z-10" />
    </motion.div>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience" className="py-20">
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-foreground-muted/20" />
        
        <div className="relative space-y-12">
          {experience.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}