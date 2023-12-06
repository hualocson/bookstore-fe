import { useState } from "react";

import Image from "next/image";

import {
  removeCartItem,
  toggleCheckedCartItem,
  updateCartItemQuantity,
} from "@/apis/cart";
import { cn, priceFormatter } from "@/lib/utils";
import coverBook from "@/resources/images/landing/cover-book.jpg";
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({
  productId,
  name,
  image,
  quantity,
  price,
  mutate,
  checked,
  author,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isChecked, setIsChecked] = useState(checked);
  const handleUpdateQuantity = async (quantity) => {
    if (quantity > 0) {
      const { error } = await updateCartItemQuantity({ productId, quantity });
      if (error) {
        console.log(error);
      } else {
        mutate();
      }
    } else {
      const { error } = await removeCartItem({
        productId,
      });
      if (error) {
        console.log(error);
      } else {
        mutate();
      }
    }
  };

  const handleOnToggleChecked = async () => {
    const { error } = await toggleCheckedCartItem({
      productId,
    });
    if (error) {
      console.log(error);
    } else {
      mutate();
    }
  };

  return (
    <div
      className={cn(
        "group relative grid grid-cols-12 rounded-lg p-4 transition-all duration-250 hover:bg-grayscale-400/30",
        isChecked && "bg-grayscale-500/30"
      )}
    >
      <div className="col-span-5 grid grid-cols-12 gap-4">
        <div className="relative col-span-5 h-44 translate-x-0 transition-all duration-250 group-hover:translate-x-2">
          <Image
            src={image ?? coverBook}
            alt="Cover Book"
            fill
            className="rounded-md object-cover shadow-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-7 flex flex-col items-start justify-around">
          <p className="line-clamp-2 font-bold">{name}</p>
          <p className="line-clamp-1 text-sm text-primary-600">{author}</p>
          <>
            <Button
              variant="light"
              color="secondary"
              size="sm"
              onPress={onOpen}
              startContent={<Trash2 size={20} />}
              isIconOnly
            />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Are you sure?
                    </ModalHeader>
                    <ModalBody>
                      <p>This action will remove this item from your cart.</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        No
                      </Button>
                      <Button
                        color="primary"
                        onPress={() => {
                          onClose();
                          handleUpdateQuantity(0);
                        }}
                      >
                        Yes
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        </div>
      </div>
      <div className="col-span-3 flex justify-center gap-3">
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={() => handleUpdateQuantity(quantity - 1)}
          startContent={<Minus size={16} />}
        />
        <div className="inline-flex h-8 w-8 cursor-default items-center justify-center rounded-full bg-grayscale-300/30 text-center">
          <span>{quantity ?? 0}</span>
        </div>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={() => handleUpdateQuantity(quantity + 1)}
          startContent={<Plus size={16} />}
        />
      </div>
      <p className="col-span-2 text-center font-bold text-grayscale-700">
        {priceFormatter(price)}
      </p>
      <p className="col-span-2 text-end font-bold text-grayscale-700">
        {priceFormatter(price * quantity)}
      </p>
      <Checkbox
        isSelected={isChecked}
        onValueChange={setIsChecked}
        onChange={handleOnToggleChecked}
        radius="sm"
        className="absolute bottom-4 right-4"
      />
    </div>
  );
};

export default CartItem;
