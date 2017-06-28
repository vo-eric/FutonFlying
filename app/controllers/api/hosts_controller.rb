class Api::HostsController < ApplicationController

  def index
    @hosts = Host.all
  end

  def create
    @host = Host.new(host_params)
    if @host.save
      render 'api/hosts/show'
    else
      render json :@host.errors.full_messages, status: 422
    end

  end

  def show
    @host = Host.find(params[:id])
  end

  def update
    @host = Host.find(params[:id])
    if @host.update(host_params)
      render :show
    else
      render json: @host.errors.full_messages, status: 422
    end
  end

  def delete
    host = Host.find(params[:id])
    host.delete
    render :index
  end

  private
  def host_params
    params.require(:host).permit(
      :lng,
      :lat,
      :owner_id,
      :description,
      :accepting_guests
    )
  end

end
