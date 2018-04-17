class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def index

    @bookings = Booking.where("guest_id = #{current_user.id}")
    render :index
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def create
    @booking = Booking.new(host_id: booking_params[:hostId], start_date: booking_params[:startDate], end_date: booking_params[:endDate], num_guests: booking_params[:numGuests])
    @booking.guest_id = @current_user.id

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end

  end
  # def update
  #   @booking = Booking.find(params[:id])
  #
  #   if @booking.update(user_params)
  #     render "api/bookings/show"
  #   else
  #     render json: @booking.errors.full_messages, status: 422
  #   end
  #
  # end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking
      @booking.destroy
      render "api/bookings/index"
    else
      render json: ["There is no record of this booking"], status: 404
    end
  end

  private

  def booking_params
    params
      .require(:booking)
      .permit(
        :startDate,
        :endDate,
        :hostId,
        :numGuests
      )
  end

end
