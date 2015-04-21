class Post < ActiveRecord::Base
    has_many :comments
    belongs_to :user
    def as_json(options = {})
        super(option.merge(include: [:user, comments:{include: :user}]))
    end
end
