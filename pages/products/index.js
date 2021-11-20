const path = 'https://hardeepcoder.in';
import Link from 'next/link';
function products({data}) {
    return (
        <div className="container">
            <h1 className="display-3 text-center text-success p-2 m-3">Nextjs - Data fetching...</h1>
            <div className="row">
                {
                    data.slice(6,30).map((p)=>(
                        <div className="col-md-4 card border-0">
                            <div className="card-body">
                            <h4 className="h4 text-capitalize text-primary">
                               <Link href={`products/${p.id}`}> 
                               {p.name}
                               </Link>
                               - {p.price}
                                </h4>
                            <p>{p.short_description.substring(0,30)}</p>
                           <Link href={`products/${p.id}`}> 
                             <img src={path + '/public/img/' + p.pro_img} className="w-100"/>
                           </Link>
                            <p>{p.description.substring(0,50)}</p>
                            </div>
                            </div>
                    ))
                }   
            </div>
            
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://hardeepcoder.in/api/products');
    const data = await res.json();

    return{
        props:{
            data
        }
    }

}
export default products
