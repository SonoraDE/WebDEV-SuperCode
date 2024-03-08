import "./Loading.css";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../Context/Context";

const Loading = () => {
    
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    }, []);
  
    return (
      <section>
        <p>SEITE WIRD GELADEN</p>
        <div class="loader"></div>
      </section>
    );
  };
 
export default Loading;