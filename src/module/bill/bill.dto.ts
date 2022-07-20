export interface BillDtoDetail{
    quantity: number
    book_id: string
    bill_id: string
    bill_detail_id: string
}

export interface BillDto {
    bill_id: string
    date_bill: Date
    phone_number: string
    name: string
    total_money: number
    address: string
    bookList: BillDtoDetail[]
}
