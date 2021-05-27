import React from "react";
import axios from "axios";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";


export default class CarrinhoTotal extends React.Component {
    botaoFinalizar = () => {
        this.props.removerTodos()
        this.compraFinalizada()
    }

    compraFinalizada = () => {
        return alert("Compra finalizada com sucesso!")
    }

    render() {

        return (
            <div>

                <div className="flex justify-center my-4 mt-6 -mx-2 lg:flex">
                    <div className="lg:px-2 lg:w-1/2 ">
                        <div className="p-4 bg-gray-100 rounded-full">
                            <h1 className="ml-2 font-bold uppercase text-center">
                                Detalhes da compra
                    </h1>
                        </div>
                        <div className="p-4">


                            <div className="flex justify-between pt-4 border-b">
                                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                    Total
                      </div>
                                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                    R${this.props.valorTotal},00
                      </div>
                            </div>
                            <Link to="/">
                                <button onClick={this.botaoFinalizar} className="flex justify-center items-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-blue-800 rounded-full shadow item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                                    <FaCreditCard className="text-blue-500 w-8 h-8" />
                                    <span className="ml-2 mt-5px text-base">
                                        Finalizar compra
                        </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}