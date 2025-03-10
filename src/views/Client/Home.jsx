import React from "react";

import Banner from "../../components/General/Banner.jsx";
import Layout from "../../components/General/Layout.jsx";
import PaginatedProducts from "../../components/General/PaginatedProdutcs.jsx";
import { useAPI } from "../../contexts/APIContext";
import { useBlog } from "../../contexts/BlogContext"; 
import { motion } from "framer-motion"; 
import BlogPostCard from "../../components/General/BlogPostCard.jsx"; 
import AnimatedSection from "../../components/General/AnimatedSection.jsx";


const Home = () => {
  const { productos } = useAPI();
  const { posts } = useBlog(); 

  return (
    <>
      <Banner />
      <Layout>

      <div className="container mx-auto">
        <div className="row">
          {/* 🔹 Sección Best Sellers */}
          <AnimatedSection>
          <div className="flex-row justify-items-center col-md-12">
            <h1 className="backdrop-blur-lg bg-white/25 rounded-lg text-star text-5xl font-lathusca m-5 px-5  border-red-400 border-0 border-b-4 border-solid w-fit">
              Best Sellers del momento
            </h1>
            <PaginatedProducts products={productos} productsPerPage={3} showPagination={false} randomize={true} />
          </div>
          </AnimatedSection>

          <AnimatedSection>
          <div className="flex-row mt-16 justify-items-center col-md-12">
            <h1 className="backdrop-blur-lg bg-white/25 rounded-lg  text-star text-5xl font-lathusca m-5 px-5 border-red-400 border-0 border-b-4 border-solid w-fit">
              Novedades
            </h1>
            <PaginatedProducts products={productos} productsPerPage={6} showPagination={false} randomize={true}/>
          </div>
          </AnimatedSection>


          <AnimatedSection>
          <div className="flex-row mt-16  justify-items-center col-md-12">
            <h1 className="backdrop-blur-lg bg-white/25 rounded-lg  text-star text-5xl font-lathusca m-5 px-5 border-red-400 border-0 border-b-4 border-solid w-fit">
              Ofertas unicas
            </h1>
            <PaginatedProducts products={productos} productsPerPage={6} showPagination={false} randomize={true}/>
          </div>
          </AnimatedSection>





          {/* 🔹 Sección Últimos Artículos del Blog */}
          <AnimatedSection>
          <div className="flex-row justify-items-center col-md-12 mt-16">
            <h1 className="backdrop-blur-lg bg-white/25 rounded-lg  text-star text-5xl font-lathusca m-5 px-5 border-blue-500 border-0 border-b-4 border-solid w-fit">
              Ultimos Articulos del Blog
            
            </h1>
<div className="grid grid-cols-2 mt-32 gap-16">

            {/* 🔹 Animación de aparición en cascada */}
            
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post}  />
              ))}
           
              </div>
          </div>
              </AnimatedSection>
        </div>
      </div>
      
              </Layout>
    </>
  );
};

export default Home;
