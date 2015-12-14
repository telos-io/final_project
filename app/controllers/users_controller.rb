class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:show]

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user), notice: "User created!"
    else
      render :new
    end
  end

  def show
    @user = current_user
    @code = Code.order_by_rand.first
    #@round = @user.rounds_for(:user_id)
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
