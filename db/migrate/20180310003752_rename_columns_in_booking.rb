class RenameColumnsInBooking < ActiveRecord::Migration[5.0]
  def change
    rename_column :bookings, :endDate, :end_date
    rename_column :bookings, :startDate, :start_date
  end
end
