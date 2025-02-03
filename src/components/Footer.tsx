"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



export default function Footer() {
    const [newComment, setNewComment] = useState({
        comment: ''
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newComment}),
        });

        const result = await response.json();
        if (!result.success) throw new Error(result.error);

        setNewComment({
            comment: '',
        });
    } catch (error) {
        console.error('Error submitting comment:', error);
    }

};

  return (
    <div className="bg-slate-100 dark:text-white shadow-2xl">
      <div className="grid grid-cols-12 px-[20px] sm:px-[60px] py-10">
        <div className="col-start-1 col-span-6 ">
          <Link
            href="/"
            className="text-xl md:pt-2 whitespace-nowrap font-bold font-Playwrite"
          >
            Anus Blog
          </Link>
          <h4 className="whitespace-nowrap py-4 ">
            Subscribe to our newsletter for the latest updates on travel and
            adventures.
          </h4>
          <form className="flex gap-4 py-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Comment Box"
              className="border-2 px-3 p-2 w-1/2 border-black dark:border-white rounded-sm"
              value={newComment.comment}
              onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
            />
            <button className="border-2 p-2 px-3 border-black dark:border-white rounded-sm" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <div className="col-start-7 col-span-2 flex-col">
          <h1 className="font-bold">Explore More</h1>
          <Link href={"/product/811ac883-d172-459e-9bde-a93a32d8d1eb"} className="block pt-2">
            Skardu
          </Link>

          <Link href={"/product/9634e9c5-9289-4837-bf24-e6f5598c8d00"} className="py-1 block">
            Kagan
          </Link>

          <Link href={"/product/71552998-d889-458d-82fe-87531a28339f"} className="block">
            Hunza
          </Link>
        </div>
        <div className="col-start-9 col-span-2 ">
          <h1 className="font-bold whitespace-nowrap">Stay Learn More</h1>
          <Link href={"/"} className="pt-2 block whitespace-nowrap">
            Back To Top
          </Link>
          
          <Link href={"/"} className="py-1 block whitespace-nowrap">
            Rencent Blog
          </Link>
          
          <Link href={"/"} className="block whitespace-nowrap">
            Explore More
          </Link>
        </div>
        <div className="col-start-11 col-span-2">
          <h1 className="font-bold whitespace-nowrap">Follow Us</h1>
          <div className="flex pt-2 gap-2">
            <Image src={"/icon/fb.svg"} alt="fb" width={20} height={20} />
            <Link href={"/"} className=" whitespace-nowrap">
              FaceBook
            </Link>
          </div>
          <div className="flex py-1 gap-2">
            <Image src={"/icon/insta.svg"} alt="fb" width={20} height={20} />
            <Link href={"/"} className=" whitespace-nowrap">
              Instagram
            </Link>
          </div>
          <div className="flex gap-2">
            <Image src={"/icon/link.svg"} alt="fb" width={20} height={20} />
            <Link href={"/"} className=" whitespace-nowrap">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-full mx-[5px] md:mx[20px]">
        <div className="h-[1px] bg-black w-full"></div>
        <div className="flex justify-between py-3 px-4">
          <h1>© 2024 Travel Blog. All rights reserved.</h1>
          <div className="flex gap-2">
            <Link href="/" className="underline">
              Privacy Policy
            </Link>
            <Link href="/" className="underline">
              Terms of Service
            </Link>
            <Link href="/" className="underline">
              Cookies Setting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
