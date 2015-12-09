class RoundsController < ApplicationController

  before_action :authenticate_user!, only: [:create, :new]

  def new
    @round = Round.new
  end

  def create
    @round.user = current_user
    @code = Code.find params[:code_id]
    round_params = params.require(:round).permit(:wpm, :accuracy, :note)
    @round = Round.new round_params
    if @round.save
      redirect_to user_path(@user), flash: "Typing Complete"
    end
  end

end
