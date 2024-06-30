import React from "react";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getBlogs = async () => {
  noStore();
  const res = await client.fetch(`*[_type == "blog"]`);
  return res;
};

const Home = async () => {
  const blogs = await getBlogs();

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {blogs.map((blog: any) => (
        <Card key={blog._id} className="m-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{blog.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg">
              {blog.description}
            </CardDescription>
            {blog.image && (
              <Image
                src={urlForImage(blog.image)}
                alt={blog.name}
                className=" mt-4 bg-slate-100 rounded-full"
                width={200}
                height={200}
              />
            )}
          </CardContent>
          <CardFooter>
            {/* You can add any footer content here if needed */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Home;
