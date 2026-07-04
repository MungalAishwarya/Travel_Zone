import PackageCard from "./PackageCard";
import { useState } from "react";

function Packages({ addToCart }) {
  const [loading, setLoading] = useState(false);
  
  const packages = [
    {
      id: 1,
      name: "Goa Beach Paradise",
      price: "₹15,000",
      originalPrice: "₹18,000",
      description: "3 Days 2 Nights in Goa with beach view hotel & water sports",
      image: "https://media.istockphoto.com/id/157579910/photo/the-beach.jpg?s=612x612&w=is&k=20&c=2gWaxaU42paGe1sElFRsIrp98pnt_W51GxeNQmwzSVs=",
      rating: 4.5,
      reviews: 128,
      discount: "20% OFF"
    },
    {
      id: 2,
      name: "Manali Snow Adventure",
      price: "₹18,000",
      originalPrice: "₹22,000",
      description: "Snow mountains, adventure activities & cozy mountain stay",
      image: "https://media.istockphoto.com/id/1496660180/photo/the-sissu-valley.jpg?s=1024x1024&w=is&k=20&c=VK49pTUDk2TyVlJIkPGZUcAbyTmUbAaK2V_z4NiRwsg=",
      rating: 4.8,
      reviews: 256,
      discount: "18% OFF"
    },
    {
      id: 3,
      name: "Dubai Luxury Tour",
      price: "₹55,000",
      originalPrice: "₹65,000",
      description: "Luxury stay, desert safari, Burj Khalifa & shopping",
      image: "https://media.istockphoto.com/id/157604370/photo/downtown-dubai.jpg?s=1024x1024&w=is&k=20&c=NZGsN8P5HK0Sm-kK1gOXj-Ixms7EABN6O5qPBtWavks=",
      rating: 4.9,
      reviews: 512,
      discount: "15% OFF"
    },
    {
      id: 4,
      name: "Kerala Backwaters",
      price: "₹12,000",
      originalPrice: "₹15,000",
      description: "Houseboat stay, Ayurvedic spa & scenic beauty",
      image: "https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.jpg?s=1024x1024&w=is&k=20&c=vWuHdFAmB2uLr0f_QPQBucJUJ9wlZmNzLHcb4Gsv6Cs=",
      rating: 4.6,
      reviews: 189,
      discount: "20% OFF"
    },
    {
      id: 5,
      name: "Bali Spiritual Retreat",
      price: "₹35,000",
      originalPrice: "₹42,000",
      description: "Temple tours, yoga sessions & beach resorts",
      image: "https://media.istockphoto.com/id/2135023427/photo/woman-traveler-with-backpack-enjoying-balinese-hindu-temple-entrance-female-tourist-during.jpg?s=1024x1024&w=is&k=20&c=fOusBoj8asWYThgHRP15MemnFRb85YhPJxSGSvC8rmg=",
      rating: 4.7,
      reviews: 345,
      discount: "17% OFF"
    },
    {
      id: 6,
      name: "Swiss Alps Expedition",
      price: "₹85,000",
      originalPrice: "₹99,000",
      description: "Skiing, mountain railways & luxury chalets",
      image: "https://media.istockphoto.com/id/1567426291/photo/trail-runner-ascends-alpine-path-in-swiss-mountain-landscape.jpg?s=1024x1024&w=is&k=20&c=6zF_Si-sXai_H8RrGiLy3kj50mI-EsgJ7N4nKKj5VvY=",
      rating: 5.0,
      reviews: 678,
      discount: "14% OFF"
    }
  ];

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="packages">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Packages;