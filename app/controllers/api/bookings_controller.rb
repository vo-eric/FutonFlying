class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def index
    @bookings = current_user.bookings
    render: index
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update
    @booking = Booking.find(params[:id])

    if @booking.update(user_params)
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end

  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking
      @booking.destroy
      render "api/bookings/index"
    else
      render json: ["There is no record of this booking"], status: 404
  end

  private

  def booking_params
    params
      .require(:booking)
      .permit(
        :check_in_date,
        :check_out_date,
        :guest_id,
        :host_id,
        :num_guests
      )
  end

end
