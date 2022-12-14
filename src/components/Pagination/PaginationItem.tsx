import { Button } from "@chakra-ui/react";

interface PaginationItemProps{
    isCurrent?: boolean
    number: number
    onChangePage: (page: number) => void
}

export default function PaginationItem({ number, isCurrent = false, onChangePage }: PaginationItemProps){
    if(isCurrent){
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: "pink.500",
                    cursor: "default"
                }}
            >
                { number }
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bgColor="gray.700"
            _hover={{
                bg: "gray.500"
            }}
            onClick={() => onChangePage(number) }
        >
            { number }
        </Button> 
    )
}