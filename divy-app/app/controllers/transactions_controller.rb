class TransactionsController < ApplicationController

    def index
        render json: { message: "I show all transactions" }
    end

    def show
        render json: { message: "I show one transaction" }
    end

    def create
        render json: { message: "I create transactions" }
    end

    def update
        render json: { message: "I update transactions" }
    end

    def destroy
        render json: { message: "I delete transactions" }
    end


end
