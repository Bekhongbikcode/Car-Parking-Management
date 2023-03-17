import React, { useState } from "react";
import { url_api } from "../../API/api";
import { toast } from "react-toastify";

function PaginationExpiredCustomerInvoice(props) {
    const user = props.user;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = props.pageSize || 10; // default to 10 if not provided
    const totalPages = Math.ceil(props.data.length / pageSize);

    const handleClick = (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
    };


    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={currentPage === i ? "active" : null}>
                    <a href="#" onClick={(e) => handleClick(e, i)}>
                        {i}
                    </a>
                </li>
            );
        }
        return pageNumbers;
    };

    const handleChangeStatus = (id) => {
        fetch(url_api + '/security/changeStatusInvoiceCustomer/' + id, {
            method: 'PUT',
            header: {
                "Access-Control-Allow-Origin": url_api + '/security/changeStatusInvoiceCustomer/' + id,
                "Accept": "*/*",
                "Content-Type": "application/text",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

        }).then((res) => {

            console.log(res);

            toast.success('Register successfully.');

        }).catch((err) => {
            toast.error('Failed: ' + err.message);
        });
    }

    const renderListItems = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return props.data.slice(start, end).map((item, index) => (
            <tr key={start + index}>
                <td>{start + index + 1}</td>
                <td>{item.id_invoice}</td>
                <td>{item.end_date} - {item.end_time}</td>
                <td>{item.current_date} - {item.current_time}</td>
                <td>{item.expired} hours</td>
                <td>{item.fine} VND</td>
                <td style={!item.warning ? {color:'#259645', fontWeight:'bold'} : {color:'#E74032', fontWeight:'bold'}}
                
                >{item.warning ? "Not Complete" : "Completed"}</td>
                <td>
                    <button>Payment</button>
                </td>
                
               
            </tr>
        ));
    };

    return (
        <>
            <tbody>{renderListItems()}</tbody>
            <tr className="pagination">{renderPageNumbers()}</tr>

        </>
    );
}

export default PaginationExpiredCustomerInvoice;
