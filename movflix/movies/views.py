from django.shortcuts import render, HttpResponse

def home_page(request):
    return HttpResponse("home page ....!")

def about_page(request):
    return HttpResponse("about page ...!")

def contact_page(request):
    return render(request , "contact.html")