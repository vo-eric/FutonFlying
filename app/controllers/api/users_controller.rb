class Api::UsersController < ApplicationController

  # need to add filtering to this as you don't want EVERY host
  def index
    @users = bounds ? User.in_bounds(bounds).where.not(id: current_user.id): User.all.where.not(id: current_user.id)
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

private
  def user_params
    params.require(:user).permit(
    :fname,
    :lname,
    :username,
    :password,
    :bio,
    :city_id,
    :status,
    :lng,
    :lat,
    :city,
    :country,
    :accepting_guests
    )
  end

  def bounds
    params[:bounds]
  end
end
