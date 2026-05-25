import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.buyer.deleteMany();
  await prisma.seller.deleteMany();

  await prisma.buyer.createMany({
    data: [
      {
        name: "Ayush Gade",
        phone: "9527625400",
        locality: "Gomti Nagar Extension",
        budget: "7000000",
      },
      {
        name: "Rohan Sharma",
        phone: "9876543210",
        locality: "Vrindavan Yojana",
        budget: "4500000",
      },
      {
        name: "Priya Singh",
        phone: "9988776655",
        locality: "Sushant Golf City",
        budget: "9000000",
      },
    ],
  });

  await prisma.seller.createMany({
    data: [
      {
        name: "Ankit Verma",
        phone: "9000000001",
        locality: "Gomti Nagar Extension",
        plotSize: "1800",
        price: "6500000",
      },
      {
        name: "Neha Tiwari",
        phone: "9000000002",
        locality: "Vrindavan Yojana",
        plotSize: "1200",
        price: "5200000",
      },
      {
        name: "Raj Malhotra",
        phone: "9000000003",
        locality: "Janakipuram Extension",
        plotSize: "2400",
        price: "8400000",
      },
    ],
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });