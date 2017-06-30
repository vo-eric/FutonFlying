class ChangeValueToDateInBookings < ActiveRecord::Migration[5.0]
  def change
    remove_column :bookings, :check_in_date
    remove_column :bookings, :check_out_date
    add_column :bookings, :check_in_date, :date, null: false
    add_column :bookings, :check_out_date, :date, null: false
  end
end
