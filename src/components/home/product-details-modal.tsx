import { ChevronDown, Heart, Star, XCircle } from "lucide-react";
import type { Product } from "../../types";
import { useState } from "react";

interface Props {
  product: Product | null;
  onClose: () => void;
}

interface Form {
  full_name: string;
  email: string;
  phoneNumber: string;
  prm: string;
}

interface FormErrs {
  full_name: string | null;
  email: string | null;
  phone_number: string | null;
}

export default function ProductDetailsModal({ product, onClose }: Props) {
  const [form, setForm] = useState<Form>({
    full_name: "",
    email: "",
    phoneNumber: "",
    prm: "3 months",
  });
  const [highlightedImg, setHighlightedImg] = useState<string>(
    product ? (product.images.length > 0 ? product.images[0] : "") : "",
  );

  const [successMsg, setSuccessMsg] = useState<boolean>(false);
  const [formErrs, setFormErrs] = useState<FormErrs>({
    full_name: null,
    email: null,
    phone_number: null,
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    setFormErrs({
      full_name: null,
      email: null,
      phone_number: null,
    });
    e.preventDefault();
    if (!form.full_name || !form.full_name.trim()) {
      setFormErrs((prev) => ({ ...prev, full_name: "Invalid name" }));
    }
    if (!form.email || !form.email.trim()) {
      setFormErrs((prev) => ({ ...prev, email: "Invalid email" }));
    }
    if (!form.phoneNumber.trim()) {
      setFormErrs((prev) => ({
        ...prev,
        phone_number: "Invalie phone number",
      }));
      return;
    }
    setFormErrs({
      full_name: null,
      email: null,
      phone_number: null,
    });
    setSuccessMsg(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-20">
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center right-0 bg-[#000000]/70 backdrop-blur-md">
        <div className="bg-white py-6 px-5 rounded-lg w-[90%] space-y-1 lg:p-8 max-h-150 activity overflow-y-scroll flex flex-col gap-3 lg:max-w-[80%] xl:flex-row xl:gap-5 relative">
          {/* product details */}
          <div className="space-y-3 lg:w-1/2">
            <div className="space-y-2">
              <div className="bg-[#072320]/5 rounded-md w-full h-100 lg:h-80 flex items-center justify-center">
                <img
                  //   src={product ? product?.images[0] : ""}
                  src={highlightedImg}
                  alt="product"
                  decoding="async"
                  loading="lazy"
                  draggable={false}
                  className="w-[70%] h-fit cursor-pointer"
                />
              </div>
              {/* image list */}
              {product && product?.images.length > 0 && (
                <div className="flex gap-x-2 flex-wrap">
                  {product.images.map((img, index) => {
                    return (
                      <img
                        draggable={false}
                        key={index}
                        title="image"
                        decoding="async"
                        loading="lazy"
                        src={img}
                        onClick={() => setHighlightedImg(img)}
                        className="w-10 h-auto rounded-md border cursor-pointer hover:scale-105 transition ease-in-out delay-100"
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <h1 className="text-black font-grotesk font-semibold">
                {product?.title ?? ""}
              </h1>
              <div className="flex justify-between w-full items-center text-sm">
                <p className="capitalize">{product?.brand ?? ""}</p>
                <div className="flex items-center gap-1">
                  <Star size={18} />
                  <p>{product?.rating ?? 0}</p>
                </div>
              </div>
              {/* description */}
              <p className="text-sm lg:text-md">{product?.description ?? ""}</p>
              {/* price */}
              <h1 className="font-semibold text-lg font-grotesk text-black">
                ${product?.price ?? 0}
              </h1>
            </div>
          </div>
          {/* form */}
          <div className="space-y-3 lg:w-1/2">
            <div>
              <div className="flex items-center gap-x-2">
                <div className="p-1.5 text-white w-fit rounded-full bg-primary flex items-center justify-center">
                  <Heart size={15} />
                </div>
                <p className="text-xs capitalize">a little more flexibility</p>
              </div>
              <h2 className="font-grotesk text-black font-semibold">
                Make it yours
              </h2>
              <p className="text-sm">
                Interested in a payment plan? Share your details and preferred
                repayment period.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2 w-full">
              <div className="text-sm flex flex-col gap-y-1.5">
                <label>Full name</label>
                <input
                  type="text"
                  //   required
                  placeholder="Alex Morgan"
                  name="full_name"
                  className="border w-full px-2.5 rounded-md h-10"
                  value={form.full_name}
                  onChange={handleChange}
                />
                {formErrs.full_name && (
                  <p className="text-red-600 text-xs">{formErrs.full_name}</p>
                )}
              </div>
              <div className="text-sm flex flex-col gap-y-1.5">
                <label>Email address</label>
                <input
                  type="email"
                  //   required
                  placeholder="you@example.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border w-full px-2.5 rounded-md h-10"
                />
                {formErrs.email && (
                  <p className="text-red-600 text-xs">{formErrs.email}</p>
                )}
              </div>
              <div className="text-sm flex flex-col gap-y-1.5">
                <label>Phone number</label>
                <input
                  type="text"
                  //   required
                  placeholder="+1 555 123 4567"
                  name="phoneNumber"
                  className="border w-full px-2.5 rounded-md h-10"
                  value={form.phoneNumber}
                  onChange={handleChange}
                />
                {formErrs.phone_number && (
                  <p className="text-red-600 text-xs">
                    {formErrs.phone_number}
                  </p>
                )}
              </div>
              <div className="text-sm flex flex-col gap-y-1.5">
                <label>Preferred repayment method</label>
                <div className="relative">
                  <select
                    value={form.prm}
                    required
                    onChange={handleChange}
                    className="border w-full px-2.5 rounded-md h-10 appearance-none"
                  >
                    <option value={"3 months"}>3 months</option>
                    <option value={"6 months"}>6 months</option>
                    <option value={"12 months"}>12 months</option>
                    <option value={"24 months"}>24 months</option>
                  </select>
                  <ChevronDown
                    className="right-2 top-2 absolute"
                    color="gray"
                  />
                </div>
              </div>
              <button
                // disabled={
                //   !form.email ||
                //   !form.full_name.trim() ||
                //   !form.phoneNumber.trim() ||
                //   !form.prm
                // }
                className="h-10 bg-primary/90 text-white w-full rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary transition ease-in-out delay-100 cursor-pointer"
              >
                Submit
              </button>
            </form>
            {/* success msg */}
            {successMsg && (
              <p className="p-2 rounded-lg text-green-600 bg-green-600/10 border border-green-600 text-xs">
                Thanks, {form.full_name}! Your request is ready. We'll be in
                touch.
              </p>
            )}
          </div>
          {/* close btn */}
          <button
            onClick={() => {
              setForm({
                full_name: "",
                email: "",
                phoneNumber: "",
                prm: "3 months",
              });
              setFormErrs({
                full_name: null,
                email: null,
                phone_number: null,
              });
              onClose();
            }}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <XCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
