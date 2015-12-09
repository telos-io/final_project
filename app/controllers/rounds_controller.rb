class RoundsController < ApplicationController

  before_action :authenticate_user!, only: [:create, :new]

  def new
    @round = Round.new
  end

  def create
    @round.user = current_user
    @code = Code.find params[:code_id]
    round_params = params.require(:round).permit(:code_id, :user_id, :wpm, :accuracy)
    @round = Round.new round_params
    @round.save
  end

end
