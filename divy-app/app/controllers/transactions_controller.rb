class TransactionsController < ApplicationController

    # INDEX users/:id/transactions - show all transactions for user
    def index
        @txns = Transaction.all
        render json: { txn: @txns }
    end

    # SHOW users/:id/transactions/:id - show one transaction
    def show
        @txn = Transaction.find(params[:id])
        render json: { txn: @txn }
    end

    # CREATE users/:id/transactions - create transactions
    # Conditional stmt to create a row on the transaction_users table
    def create
        # @group ? @group.transactions.create!(txn_params) : Transaction.create(txn_params)
        # @new_txn = Transaction.new(txn_params)
        render json: { txn: "Transaction created" }
    end

    # UPDATE users/:id/transactions/:id - update a transaction
    def update
        @update_txn = Transaction.find(params[:id]).update(txn_params)
        render json: { txn: @update_txn }
    end

    # DELETE users/:id/transactions/:id - destroy transactions
    def destroy
        @txn = Transaction.find(params[:id])
        @txn.destroy
        render json: { message: "Transaction #{params[:id]} has been destroyed" }
    end

    private

    # def set_group
    #     if params[:group_id]
    #         @group = Group.find(params[:group_id])
    #     end
    # end

    def set_user
        if params[:user_id]
            @user = User.find(params[:id])
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
