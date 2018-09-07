class TransactionsController < ApplicationController
    before_action :authenticate_user, only: [:show, :create, :update, :destroy] 
    before_action :set_user, only: [:show, :update, :destroy]
    # before_action :authenticate_user!, except: [:new, :create]
    

    # INDEX users/:id/transactions - show all transactions for user
    def index
        # puts current_user.inspect
        # @txns = Transaction.all
        @txns = current_user.transactions
        render json: { txn: @txns }
    end

    # SHOW users/:id/transactions/:id - show one transaction
    def show
        @txn = current_user.transactions.find(params[:id])
        # puts current_user.inspect
        # @txn = Transaction.find(params[:id])
        # @txn_users = TransactionUser.where(transaction_id: params[:id])
        # if @txn_users
        #     render json: { txn: @txn, users: @txn_users }
        # else
        #     render json: { txn: @txn }
        # end
        render json: { txn: @txn }, include: :users
    end

    # CREATE users/:id/transactions - create transactions
    # Conditional stmt to create a row on the transaction_users table
    def create
        # @txn_id = params[:transaction_id]
        # @user ? @user.transactions.create!(txn_params) : Transaction.create(txn_params)
        # @txn_id = params[:data][:attributes][:user_id]
        # puts @txn_id
        # if @txn_id
            # new_txn = Transaction.create!(txn_user_params)
        # end
        # @txn_id ? TransactionUser.create!(txn_user_params) : Transaction.create!(txn_params)
        # @user.transactions.create!(txn_params)

        # if @txn_id.length
        #     @new_txn = TransactionUser.create!(txn_user_params)
        # else
        #     @new_txn = current_user.transactions.create!(txn_params)
        # end
        @txn_id = TransactionUser.where(transaction_id: params[:data][:attributes][:id])
        if @txn_id
            @new_txn = TransactionUser.create!(txn_user_params)
        else
            @new_txn = current_user.transactions.create!(txn_params)
        end
        
        # current_user.transaction_users.create!(txn_user_params)
        # current_user.transactions.create!(txn_params)
        render json: { txn: "Transaction created" }
    end

    # UPDATE users/:id/transactions/:id - update a transaction
    def update
        # @update_txn = Transaction.find(params[:id]).update(txn_params)
        @update_txn = current_user.transactions.find(params[:id]).update(txn_params)
        render json: { txn: @update_txn }
    end

    # DELETE users/:id/transactions/:id - destroy transactions
    def destroy
        @txn = current_user.transactions.find(params[:id]).destroy
        render json: { message: "Transaction #{params[:id]} has been destroyed" }
    end

    private

    # def set_group
    #     if params[:group_id]
    #         @group = Group.find(params[:group_id])
    #     end
    # end

    def set_user
        @user = User.find(params[:user_id])
    end

    # def find_txn_id
    #     if params[:data][:attributes][:transaction_id]
    #         @txn_id = 
    #     end
    # end

    # def find_users
    #     if params[:id]
    #         @txn_users = TransactionUser.find(params[:id])
    #     end
    # end

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

    def txn_user_params
        params
            .require(:data)
            .require(:attributes)
            .permit(
                :user_id,
                :transaction_id
            )
    end

end
