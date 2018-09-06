class GroupsController < ApplicationController

    def index
        render json: { message: "I show all groups" }
    end

    def show
        render json: { message: "I show one group" }
    end

    def create
        render json: { message: "I create groups" }
    end

    def update
        render json: { message: "I update groups" }
    end

    def destroy
        render json: { message: "I delete groups" }
    end


end
