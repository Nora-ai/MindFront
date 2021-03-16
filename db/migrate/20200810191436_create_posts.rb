class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :subject
      t.string :content
      t.string :img_url
      t.string :bittersweet
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
