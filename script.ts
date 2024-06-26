import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main2() {
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice1@prisma.io',
        },
    })
    console.log(user)
}

async function main3() {
    const users = await prisma.user.findMany()
    console.log(users)
}
async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Bob',
            email: 'bob@prisma.io',
            posts: {
                create: {
                    title: 'Hello World',
                },
            },
        },
    })
    console.log(user)
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
