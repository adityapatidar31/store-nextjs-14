import db from "@/utils/db";

async function AboutPage() {
  const task = await db.testProfile.create({
    data: {
      name: "aditya",
    },
  });

  console.log(task);
  return <div>About Page</div>;
}

export default AboutPage;
