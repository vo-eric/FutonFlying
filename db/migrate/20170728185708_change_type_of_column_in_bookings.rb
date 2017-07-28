class ChangeTypeOfColumnInBookings < ActiveRecord::Migration[5.0]
  def change
    remove_column :bookings, :startDate
    remove_column :bookings, :endDate
    add_column :bookings, :startDate, :date
    add_column :bookings, :endDate, :date
  end
end
