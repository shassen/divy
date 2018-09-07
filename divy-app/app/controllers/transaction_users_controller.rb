class TransactionUsersController < ApplicationController
    before_action :authenticate_user, only: [:show, :create, :update, :destroy] 
    before_action :set_user, only: [:show, :create, :update, :destroy]

    def index
        @user_txns = TransactionUser.all
        render json: { txn: @user_txns }
    end

    def show
        @one_user_txn = TransactionUser.where(transaction_id: params[:id])
        render json: { txn: @one_user_txn }
    end

    def create
        # @users = User.find(params[:user_id])
        # puts @users.id
        # puts Transaction.find(params[:id])
        # @txn_id = Transaction.find(params[:id])
        # @new_shared_txn = TransactionUser
        @new_shared_txn = @current_user.transaction_users.create!(txn_user_params)
        render json: { txn: @new_shared_txn }
    end

    def update
        render json: { msg: "I update the relationship between transactions with multiple users" }
    end

    def destroy
        render json: { msg: "I delete relationships of transactions with multiple users" }
    end

    private

    def set_user
        @current_user = User.find(params[:user_id])
    end

    # def set_users

    #     # if @users.length
    #     #     @user = 
    # end

    def txn_user_params
        params
            .require(:data)
            .require(:attributes)
            .permit(
                :user_id,
                :transaction_id,
            )
    end


end
