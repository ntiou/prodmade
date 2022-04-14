@extends('layouts.app')

@section('content')
<div class="container-fluid row">
    <div class="col-md-8">
        <div>
            <form method="get" name='Product' class="mx-auto" id="Product-form" action="javascript:void(0)" role="form">
                <div class="input-group">
                    <input id="product" class="form-control" name="product" type="text" placeholder="Entrer l'identifiant ou le nom" />
                </div>
            </form>
        </div>
        <div class=" pt-4">
            <ul class="result"></ul>
        </div>

        <div class="empty_result d-none text-center pt-4">
            <p>Aucun produit correspondant a votre requete !</p>
        </div>
    </div>
    <div class="col-md-4">
        <h1>Tous les produits</h1>
        <ul class="list-group list-group-flush">
            @foreach($products as $product)
            <li class="list-group-item">identifiant : {{$product->id}} nom : {{$product->name}}</li>
            @endforeach
        </ul>
    </div>
</div>
@endsection