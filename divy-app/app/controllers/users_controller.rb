class UsersController < ApplicationController
  
  before_action :set_user, only: [:show, :create, :update, :destroy]

  # GET /users
  def index
    @users = User.all
    # @users = User.where(email: params[:auth][:email])
    # @users = User.where(email: params[:user][:email])
    render json: { users: @users }
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @new_user = User.new(user_params)

    if @new_user.save
      render json: @new_user, status: :created, location: @new_user
    else
      render json: @new_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :username, :wallet, :email, :password, :password_confirmation, :admin)
    end
end
