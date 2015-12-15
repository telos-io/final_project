class RoundsController < ApplicationController

  before_action :authenticate_user!, only: [:create, :new]

  def new
    @round = Round.new
  end

  def create
    round_params = params.require(:round).permit(:code_id, :user_id, :wpm, :accuracy)
    @round = Round.new round_params
    #@round.user_id = current_user.id
    #@round.code_id = Code.find params[:id]
    if @round.save
      render :nothing => true
    end
  end

end
