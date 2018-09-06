class TransactionsController < ApplicationController

    def index
        @txns = Transaction.all
        render json: { txn: @txns }
    end

    def show
        @txn = Transaction.find(params[:id])
        render json: { txn: @txn }
    end

    def create
        @new_txn = Transaction.new(txn_params)
        render json: { txn: @new_txn.save }
    end

    def update
        render json: { message: "I update transactions" }
    end

    def destroy
        render json: { message: "I delete transactions" }
    end

    private
    # def group_id
    #     @group_id = params[:group_id]
    # end

    def txn_params
        txn_params
            .require(:data)
            .require(:attributes)
            .permit(
                :amount,
                :location,
                :description,
                :approved,
                :group_id
            )
    end


end
