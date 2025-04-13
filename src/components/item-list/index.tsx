import { motion } from 'motion/react'

interface Item {
  name: string
  src: string
}

const ItemList = ({ items }: { items: Item[] }) => {
  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 xl:-top-20 grid max-xl:grid-cols-1 xl:grid-cols-2 gap-6 w-full max-xl:p-4">
        {items.map((item: Item, index: number) => (
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 4 + 4 * index }} key={item.name} className="w-full border-2 rounded-xl">
            <p className="text-center p-2">{item.name}</p>
            <img src={item.src} alt="gift" className="w-full rounded-b-xl" />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default ItemList
