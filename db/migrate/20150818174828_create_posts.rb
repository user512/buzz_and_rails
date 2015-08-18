class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.integer :vote
      t.float :lat
      t.float :long
      t.references :user_id

      t.timestamps null: false
    end
  end
end
