class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :startDate, null: false
      t.integer :endDate, null: false
      t.integer :host_id, null: false
      t.integer :guest_id, null: false
      t.integer :num_guests, default: 1, null: false

      t.timestamps
    end
      add_index :bookings, :host_id
      add_index :bookings, :guest_id
  end
end
