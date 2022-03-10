import { Box, Text, Input, Center, FormLabel, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../configs/api";
import { useSearchParams } from 'react-router-dom'

const ProductCard = ({productName, price, category}) => {
    return (
        <Box margin="2"
        borderWidth={1} 
        borderColor={"gray"} 
        borderRadius={"4px"} 
        width={"150px"}
        padding="4"
        >
            <Text fontSize={"large"} fontWeight={"bold"}>
            {productName}
            </Text>
            <Text>Rp. {price}</Text>
            <Text>{category}</Text>
        </Box>

    )
}
const ProductPage = () => {
    const [productList, setProductList] = useState([])

    const [searchInput, setSearchInput] = useState("")
//                page disini itu key dari query paramsnya
    const [currentPage, setCurrentPage] = useState(
        searchParams.get("page") ? searchParams.get("page") : 1)

    const [searchValue, setSearchValue] = useState(
        searchParams.get("search") ? searchParams.get("page") : "")

    const [searchParams, setSearchParams] = useSearchParams()

    const pageLimit = 3

    const InputHandler = (event) => {
        const { value } = event.target

        setSearchInput(value)
    }

    const fetchProducts = (
        queryParams = {
        params: {
            _limit: pageLimit
         }
        }
    ) => {
    

        axiosInstance.get("/products", queryParams)
        .then((res) => {
            setProductList(res.data)
        })
        .catch((err) => {
            console.log(err)
            alert("terjadi kesalahan")
        })
    }

    const renderProducts = () => {
        return productList.map((val) => {
                return(
                    <ProductCard 
                    category={val.category} 
                    price={val.price} 
                    productName={val.product_name}
                    />
                ) 
            })
        
    }

    const searchButtonHandler = () => {
       setSearchValue(searchInput)
       setCurrentPage(1)

       setSearchParams({ search: searchInput})
    }

    // const searchOnChange = (event) => {
    //     const { value } = event.target

    //     fetchProducts({
    //         params: {
    //             product_name: value ? value : undefined
    //         }
    //     })
    // }

    const paginationHandler = (direction = "next") => {
      let newPage = currentPage

      if(direction === "prev" && currentPage === 1) {
          return
      }
      if(direction ==="next") {
          newPage += 1
      }else if(direction ==="prev") {
          newPage -= 1
      }
      setCurrentPage(newPage)

      setSearchParams({page: newPage})
    }

    useEffect(() => {
        let product_name = searchParams.get("search")
        let _page = 
        fetchProducts({
            _limit: pageLimit,
            _page: currentPage,
            product_name: product_name
        })
    }, [currentPage, searchValue])

    
    return (
     <Center>
        <Box width="xl">
            <Text fontSize={"2xl"} marginBottom={"8"}>Products Page</Text>

            <FormLabel htmlFor="searchProduct">Product Name</FormLabel>
            <Input id="searchProduct" onChange={InputHandler}/>
            <Button onClick={searchButtonHandler} marginTop="1">Search</Button>

            <Flex wrap={"wrap"}>
            {renderProducts()}
            </Flex>

            <Flex justifyContent={"center"}>
                <Button marginX="2" onClick={() => paginationHandler("prev") }>Previous Page</Button>
                <Text fontSize={"2xl"}>{currentPage}</Text>
                <Button marginX="2" onClick={() => paginationHandler("next") }>Next Page</Button>
            </Flex>
        </Box>
     </Center>
    )
}

export default ProductPage
