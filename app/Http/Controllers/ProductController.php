<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function get_product($pd)
    {
        //get product
        $_product = Product::where('id', $pd)
            ->orWhere('name', $pd)
            ->first();

        if ($_product) {
            //all child for this product
            $_childs = [];
            $counter = 0;
            foreach ($_product->dependencies as $child) {
                $product = Product::where('id', $child->dependency_id)
                    ->first();
                $counter += 1;

                if ($counter > 10) {
                    break;
                }
                array_push($_childs, $product);
            }

            //product child level2
            $_childs_2 = [];
            $counter = 0;
            foreach ($_childs as $child) {
                $childs = [];
                foreach ($child->dependencies as $child_2) {
                    $product = Product::where('id', $child_2->dependency_id)
                        ->first();
                    $counter += 1;

                    if ($counter > 10) {
                        break;
                    }
                    array_push($childs, $product);
                }
                array_push($_childs_2, $childs);
            }

            return Response()->json([
                'status' => true,
                'data' => ['product' => $_product, 'childs' => $_childs, 'childs_2' => $_childs_2]
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => $pd,
            ]);
        }
    }
}
