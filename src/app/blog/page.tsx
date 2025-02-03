import Image from "next/image";


export default async function DetailPage() {  
  return (
    <div className="flex flex-col items-center p-8">
      <div className="max-w-4xl w-full">
        {/* Image */}
       
          <div className="w-full mb-6">
            <Image 
              src={"/Swat.jpeg"}
              alt={"Swat"}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
      

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Swat with Muhammad Anus Ahmed
        </h1>

        {/* Description */}
        <div className="mb-6 text-center italic text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        dapibus risus at ligula consectetur, sit amet congue dui tristique.
        </div>

        {/* Details */}
        <div className="prose max-w-none">
             <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        dapibus risus at ligula consectetur, sit amet congue dui tristique.
      </p>
      <p>
        Curabitur sit amet leo vitae risus sollicitudin aliquam sed in velit.
        Etiam convallis semper metus vel egestas.
      </p>
      <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

        </div>
      </div>
    </div>
  )
}

