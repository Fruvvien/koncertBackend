import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main() {
  for (let index = 1; index <= 7; index++) {
    const koncert = await prisma.koncert.upsert({
      where: {id: index},
      update: {},
      create: {
        fellepo : `asd${index}`,
        kezdesiIdo: new Date(`2025-02-1${index}`),
        idotartam: 2
      }
    })
  }
  
    

 
 
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
