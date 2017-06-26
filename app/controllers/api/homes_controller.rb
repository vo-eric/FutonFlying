class Api::HomesController < ApplicationController

  def index
    @homes = Home.all
  end

  def create
    @home = Home.new(home_params)
    if @home.save
      render 'api/homes/show'
    else
      render json :@home.errors.full_messages, status: 422
    end

  end

  def show
    @home = Home.find(params[:id])
  end

  def update
    @home = Home.find(params[:id])
    if @home.update(home_params)
      render :show
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def delete
    home = Home.find(params[:id])
    home.delete
    render :index
  end

  private
  def home_params
    params.require(:home).permit(
      :lng,
      :lat,
      :owner_id,
      :description,
      :accepting_guests
    )
  end

end
