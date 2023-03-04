import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";



const ItemListContainer = () => {
  const { category } = useParams();
  
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();


if (category === undefined) {
  return (
    <div>
      <Center  fontSize={30} bg="#F7E0B2" h="50px" w="1000px" opacity={0.8} color="black" borderRadius={75}>
        <Heading as="h2" size="2x1">
          Catalogo
        </Heading>
      </Center>
      <ItemList harinas={Data}/>
    </div>
  );
} else {
  const catFilter = Data.filter((harina) => harina.category === category);
  return (
    <div>
      <Center  fontSize={30} bg="#F7E0B2" h="50px" w="1000px" opacity={0.8} color="black" borderRadius={75}>
        <Heading as="h2" size="2xl">
          Categoria  
        </Heading>
      </Center>
      {catFilter ? <ItemList harinas={catFilter} /> : <ItemList harinas={Data} />}
    </div>
  );
}
};
export default ItemListContainer;