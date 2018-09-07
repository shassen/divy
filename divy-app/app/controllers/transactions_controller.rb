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
        @group ? @group.transactions.create!(txn_params) : Transaction.create(txn_params)
        # @new_txn = Transaction.new(txn_params)
        render json: { txn: "Transaction created" }
    end

    def update
        @update_txn = Transaction.find(params[:id]).update(txn_params)
        render json: { txn: @update_txn }
    end

    def destroy
        render json: { message: "I delete transactions" }
    end

    private

    def set_group
        if params[:group_id]
            @group = Group.find(params[:group_id])
        end
    end

    def txn_params
        params
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
