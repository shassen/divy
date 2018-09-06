class GroupsController < ApplicationController

    def index
        @groups = Group.all
        render json: { group: @groups }
    end

    def show
        @group = Group.find(params[:id])
        render json: { group: @group }
    end

    def create
        @new_group = Group.new(group_params)
        render json: { group: @new_group.save }
    end

    def update
        render json: { message: "I update groups" }
    end

    def destroy
        render json: { message: "I delete groups" }
    end

    private

    def group_params
        params
            .require(:data)
            .require(:attributes)
            .permit(
                :name,
                :wallet,
                :description
            )
    end

end
