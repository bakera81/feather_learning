class UnitsController < ApplicationController
  def index
    @units = Unit.all
  end

  def show
    @unit = Unit.find(params[:id])
  end

  def new
    @unit = Unit.new
  end

  def edit
    @unit = Unit.find(params[:id])
  end


 def create
    @course = Course.find(params[:course_id])
    @unit = @course.units.create(unit_params)
    if @unit.save
      redirect_to course_path(@course)
    else
      render 'new'
    end
  end

  def update
    @unit = Unit.find(params[:id])

    if @unit.update(unit_params)
      # @unit.course.build
      redirect_to @unit
    else
      render 'edit'
    end
  end

  def destroy
    @unit = Unit.find(params[:id])
    @unit.destroy

    redirect_to units_path
  end

  private
    def unit_params
      params.require(:unit).permit(:title, :content)
    end
  
end
