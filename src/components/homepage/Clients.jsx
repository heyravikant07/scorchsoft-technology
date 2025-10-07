import React from "react";
import Clientlogo1 from "../../assets/clientlogo1.png"
import Clientlogo2 from "../../assets/clientlogo2.png"
import Clientlogo3 from "../../assets/clientlogo3.png"
import Clientlogo4 from "../../assets/clientlogo4.png"

const clients = [ {client: Clientlogo1},
                  {client: Clientlogo2},
                  {client: Clientlogo3},
                  {client: Clientlogo4}
                ];

export default function Clients(){
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-800">Trusted By The World's Best Organizations</p>
         <div className="items-center justify-center gap-6 flex-wrap mt-8 grid md:grid-cols-4 ">
          {clients.map((c,i)=> <div key={i} className="h-8 "> <img src={c.client} alt="client" className="h-15 opacity-85"></img></div>)}
        </div>
      </div>
    </section>
  );
}
